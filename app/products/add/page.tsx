import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { PhotoIcon } from "@heroicons/react/24/solid";

const AddProductPage = () => {
  return (
    <div>
      <form>
        <label htmlFor="photo">
          <PhotoIcon className="w-20" />
          <div className="text-sm text-neutral-400">사진을 추가해주세요.</div>
        </label>
        <input type="file" name="photo" id="photo" />
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
