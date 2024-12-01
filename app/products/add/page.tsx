"use client";

import { useState } from "react";

import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { uploadProduct } from "./actions";

const AddProductPage = () => {
  const [preview, setPreview] = useState("");
  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.currentTarget.files) return;

    const file = event.currentTarget.files[0];
    const url = URL.createObjectURL(file);
    setPreview(url);
  };

  return (
    <div>
      <form className="flex flex-col gap-5 p-5" action={uploadProduct}>
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
        <Input type="text" name="title" required placeholder="제목" />
        <Input type="number" name="price" required placeholder="가격" />
        <Input
          type="text"
          name="description"
          required
          placeholder="자세한 설명"
        />
        <Button text="작성 완료" />
      </form>
    </div>
  );
};

export default AddProductPage;
