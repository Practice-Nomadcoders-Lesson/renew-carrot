"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "@/components/input";
import { Button } from "@/components/button";

import { getUploadUrl, uploadProduct } from "./actions";
import { ProductFormType, productSchema } from "./schema";

import { PhotoIcon } from "@heroicons/react/24/solid";

const AddProductPage = () => {
  const [preview, setPreview] = useState("");
  const [uploadUrl, setUploadUrl] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ProductFormType>({
    resolver: zodResolver(productSchema),
  });

  const onImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.currentTarget.files) return;

    const file = event.currentTarget.files[0];
    const url = URL.createObjectURL(file);
    setPreview(url);
    setFile(file);

    // upload URL 얻기
    const { success, result } = await getUploadUrl();
    if (success) {
      const { id, uploadURL } = result;
      setUploadUrl(uploadURL);

      setValue("photo", `${process.env.NEXT_PUBLIC_IMAGE_DELIVERYURL}/${id}`);
    }
  };

  // cloudflare로 이미지 업로드
  // formData로 받은 파일을 업로드 후 URL로 대체
  const onSubmit = handleSubmit(async (data: ProductFormType) => {
    if (!file) return;

    // upload image to cloudflare
    const cloudflareForm = new FormData();
    cloudflareForm.append("file", file);

    const response = await fetch(uploadUrl, {
      method: "post",
      body: cloudflareForm,
    });

    if (response.status !== 200) return;

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("price", data.price.toString());
    formData.append("description", data.description);
    formData.append("photo", data.photo);

    // call upload product
    return uploadProduct(formData);
  });

  const onValid = async () => {
    await onSubmit();
  };

  return (
    <div>
      <form className="flex flex-col gap-5 p-5" action={onValid}>
        <label
          htmlFor="photo"
          className="flex aspect-square cursor-pointer flex-col items-center justify-center rounded-md border-2
          border-dashed border-neutral-300 bg-cover bg-center text-neutral-300"
          style={{ backgroundImage: `url(${preview})` }}
        >
          {preview === "" && (
            <>
              <PhotoIcon className="w-20" />
              <div className="text-sm text-neutral-400">
                사진을 추가해주세요.
                {errors.photo?.message}
              </div>
            </>
          )}
        </label>
        <input
          type="file"
          name="photo"
          id="photo"
          className="hidden"
          onChange={onImageChange}
        />
        <Input
          type="text"
          required
          placeholder="제목"
          {...register("title")}
          errors={[errors.title?.message ?? ""]}
        />
        <Input
          type="number"
          required
          placeholder="가격"
          {...register("price")}
          errors={[errors.price?.message ?? ""]}
        />
        <Input
          type="text"
          required
          placeholder="자세한 설명"
          {...register("description")}
          errors={[errors.description?.message ?? ""]}
        />
        <Button text="작성 완료" />
      </form>
    </div>
  );
};

export default AddProductPage;
