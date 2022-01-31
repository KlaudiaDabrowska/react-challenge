import styled from 'styled-components';
import noContentImage from '../../assets/no_content.png';

const StyledNoContent = styled.div`
  background-image: url(${noContentImage});
  width: 202px;
  height: 202px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
const StyledTextNoContent = styled.div`
  position: absolute;
  left: 50%;
  top: 38%;
  transform: translateX(-50%);
  font-family: 'Inter';
  font-size: 19.2px;
  font-weight: 400;
  line-height: 29px;
  color: rgba(51, 51, 51, 0.5);
`;

export const NoContent = () => {
  return (
    <>
      <StyledNoContent />
      <StyledTextNoContent>Brak danych do wyświetlenia</StyledTextNoContent>
    </>
  );
};
