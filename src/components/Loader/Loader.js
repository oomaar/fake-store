import { LoaderContainer, LoaderRing } from "./styledLoader";

export const Loader = () => {
  return (
    <LoaderContainer className="loader-container">
      <LoaderRing className="loader-ring"></LoaderRing>
    </LoaderContainer>
  );
};
