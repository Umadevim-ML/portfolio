const CanvasLoader = () => {
  return (
    <div
      className="flex justify-center items-center flex-col"
    >
      <span className='canvas-loader'></span>
      <p
        style={{
          fontSize: 14,
          color: "#915EFF",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        Loading...
      </p>
    </div>
  );
};

export default CanvasLoader;
