import { StyledSection } from "./styled";

export interface SectionProps {
  $top?: boolean;
  $center?: boolean;
  $modal?: boolean;
  children: React.ReactNode;
}

const Section = ({ $top, $center, $modal, children }: SectionProps) => {
  return (
    <StyledSection $top={$top} $center={$center} $modal={$modal}>
      {children}
    </StyledSection>
  );
};

export default Section;
