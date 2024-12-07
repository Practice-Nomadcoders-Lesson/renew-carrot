"use client";

import { useState } from "react";

import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { getUploadUrl, uploadProduct } from "./actions";
import { useFormState } from "react-dom";

const AddProductPage = () => {
  const [preview, setPreview] = useState("");
  const [uploadUrl, setUploadUrl] = useState("");
  const [imageId, setImageId] = useState("");

  const onImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.currentTarget.files) return;

    const file = event.currentTarget.files[0];
    const url = URL.createObjectURL(file);
    setPreview(url);

    // upload URL 얻기
    const { success, result } = await getUploadUrl();
    if (success) {
      const { id, uploadURL } = result;
      setUploadUrl(uploadURL);
      setImageId(id);
    }
  };

  // cloudflare로 이미지 업로드
  // formData로 받은 파일을 업로드 후 URL로 대체
  const interceptAction = async (_: any, formData: FormData) => {
    const file = formData.get("photo");
    if (!file) return;

    // upload image to cloudflare
    const cloudflareForm = new FormData();
    cloudflareForm.append("file", file);

    const response = await fetch(uploadUrl, {
      method: "post",
      body: cloudflareForm,
    });

    if (response.status !== 200) return;

    //replace 'photo' in formData
    const photoUrl = `${process.env.NEXT_PUBLIC_IMAGE_DELIVERYURL}/${imageId}`;
    formData.set("photo", photoUrl);

    // call upload product
    return uploadProduct(_, formData);
  };

  const [state, action] = useFormState(interceptAction, null);

  return (
    <div>
      <form className="flex flex-col gap-5 p-5" action={action}>
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
                {state?.fieldErrors.photo}
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
          name="title"
          required
          placeholder="제목"
          errors={state?.fieldErrors.title}
        />
        <Input
          type="number"
          name="price"
          required
          placeholder="가격"
          errors={state?.fieldErrors.price}
        />
        <Input
          type="text"
          name="description"
          required
          placeholder="자세한 설명"
          errors={state?.fieldErrors.description}
        />
        <Button text="작성 완료" />
      </form>
    </div>
  );
};

export default AddProductPage;
