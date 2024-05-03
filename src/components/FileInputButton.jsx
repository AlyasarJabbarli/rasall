import React from 'react';

function FileInputButton() {
  const fileInputRef = React.useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file.name);
  };

  return (
    <div>
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        onChange={handleFileChange}
      />
      <button
        className="bg-unnamed-color-fdc00d hover:bg-yellow-400 text-unnamed-color-1f1f1f font-bold py-[13px] px-[81px] rounded-[10px] text-[24px]"
        onClick={handleClick}
      >
        Şəkil seç
      </button>
    </div>
  );
}

export default FileInputButton;
