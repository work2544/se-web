import Card from "./components/Card";
import { cards } from "./data";

export default function contact() {
  return (
    <div className="bg-gradient-to-r from-sky-500 to-indigo-500 w-full h-screen    ">
      <div className="flex flex-col text-center justify-center w-4/5 m-auto ">
        <div className=" pt-20 w-full  m-auto">
          <div className="flex justify-center m-10">
            <h3 className=" text-4xl text-white font-bold ">Members</h3>
          </div>

          <div className="mx-auto ">
            <div className="  grid grid-cols-1 sm:grid-cols-5 gap-3">
              {cards.map((x) => (
                <Card
                  fname={x.fname}
                  job={x.job}
                  src={x.src}
                  github={x.github}
                  facebook={x.facebook}
                  key={cards.indexOf(x)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
