import React, { useEffect, useState } from "react";
import Spinner from "../shared/Spinner/Spinner";

const Tasks = () => {
  const [TodoData, setTodoData] = useState([]);
  const [Lod, setLod] = useState(true);

  useEffect(() => {
    fetch("https://bearded-eds-35480.herokuapp.com/items")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setTodoData(data);
          setLod(false);
        }
      });
  });
  return (
    <div>
      {Lod ? (
        <Spinner></Spinner>
      ) : (
        <div class="overflow-x-auto w-full px-4 md:px-32  lg:px-40">
          <table class="table w-60 shadow-md my-10 mx-auto  rounded-2xl">
            <thead>
              <tr>
                <th>ID</th>
                <th>Todo List</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {TodoData.map((dt, index) => (
                <tr key={dt._id}>
                  {dt?.Checkbox && <td>{index + 1}</td>}
                  {dt?.Checkbox && <td className="w-[60%]">{dt.data}</td>}
                  {dt?.Checkbox && <button className="btn">Delete</button>}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Tasks;
