import Image from "next/image";

import React from "react";
import Todos from "@/components/Todos";
import TodoForm from "@/components/TodoForm";

const Home = () => {
  return (
    <div className="max-w-lg mx-auto">
      <TodoForm />
      <Todos />
    </div>
  );
};

export default Home;
