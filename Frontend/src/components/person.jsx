const person = (Props) => {
  return (
    <>
      <div className="person1 w-full py-2 rounded flex gap-5 items-center cursor-pointer hover:bg-zinc-600 p-2">
        <img className="w-14 h-14 object-cover border-1 border-zinc-700 rounded-full" src={Props.imageUrl} alt={Props.name} />        
        <h5 className="text-xl">{Props.name}</h5>
      </div>
    </>
  );
};

export default person;
