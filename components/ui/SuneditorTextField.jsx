import React from 'react';
import dynamic from "next/dynamic";
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});
const SuneditorTextField = ({value = "", setValue}) => {
  return (
    <div>
      <SunEditor setOptions={{
        height: 300,
        buttonList: [
          ["undo", "redo"], 
          ["bold", "underline", "italic", "strike"], // Basic styling
          ["font", "fontSize", "formatBlock"], // Font options
          ["fontColor", "hiliteColor"], // Text color & highlight
          ["align", "list", "table"], // Text alignment & lists
          ["link", "image", "video"], // Media
          ["fullScreen", "showBlocks", "codeView"], // Additional tools
        ],
      }} defaultValue={value} setContents={value} onChange={setValue} />
    </div>
  );
};
export default SuneditorTextField;