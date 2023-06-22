import { team1, team2, team3 } from "./subcomponents/Images";
import TeamCard from "./subcomponents/TeamCard";

const OurTeam = () => {
  return (
    <section className="px-5 mt-32 mb-32">
      <main className="sm:w-11/12 mx-auto w-full ">
        <h3 className="text-3xl px-2 max-sd:text-lg">
          We have Put Together a Collection Of Experts
        </h3>
        <h5 className="text-sm px-2 mt-2">
          we have talented professionals, to bring your ideas to life.
        </h5>
        <div className="mt-11 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          <TeamCard
            name={"Gilbert Raul"}
            img={team1}
            role={"Chief Executive Officer"}
          />
          <TeamCard
            name={"Travis king"}
            img={team2}
            role={"General Manager"}
          />
          <TeamCard
            name={"Angelina Louis"}
            img={team3}
            role={"Operations Manager"}
          />
        </div>
      </main>
    </section>
  );
};

export default OurTeam;
