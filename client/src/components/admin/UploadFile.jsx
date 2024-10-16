import { useState } from "react";
import { toast } from "react-toastify";
import Resizer from "react-image-file-resizer";
import { UploadFiles } from "../../api/product";
import useEcomStore from "../../store/ecom-store";

const UploadFile = ({ form, setForm }) => {
  const [isLoading, setIsLoading] = useState(false);
  const token = useEcomStore((state) => state.token);
  const handleChange = (e) => {
    const files = e.target.files;
    if (files) {
      setIsLoading(true);
      let AllFiles = form.images;
      for (let i = 0; i < files.length; i++) {
        console.log(files[i]);
        //    validate the file
        const file = files[i];
        if (!file.type.startsWith("image/")) {
          toast.error(`file ${file.name} the type is not image`);
          continue;
        }
        //Image File Resizer
        Resizer.imageFileResizer(
          files[i],
          720,
          720,
          "JPEG",
          100,
          0,
          (data) => {
            // endpoint backend
            UploadFiles(token, data).then((res) => {
                console.log(res);
                AllFiles.push(res.data)
                setForm({
                  ...form,
                  images: AllFiles
                })
                toast.success("upload complete successfully")
            }).catch((err) => {
                console.log(err);
                
            });
          },
          "base64"
        );
      }
    }
  };
  return (
    <div className="flex items-center justify-center ">
      <input
        type="file"
        name="images"
        className="file-input file-input-ghost w-full max-w-xs"
        multiple
        onChange={handleChange}
      />
    </div>
  );
};

export default UploadFile;
