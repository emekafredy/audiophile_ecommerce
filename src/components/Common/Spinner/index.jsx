function Spinner() {
  return (
    <div className="flex items-center justify-center h-60 bg-white-200">
      <div className="relative">
        <div className="h-16 w-16 rounded-full border-t-8 border-b-8 border-black-200" />
        <div
          className="
          absolute top-0 left-0 h-16 w-16 rounded-full border-t-8 border-b-8
          border-orange-200 animate-spin"
        />
      </div>
    </div>
  );
}

export default Spinner;
