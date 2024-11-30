export interface IntroProps {
  title: string;
  description: string;
}

const Intro = (props: IntroProps) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <div>{props.description}</div>
    </div>
  );
};

export default Intro;
