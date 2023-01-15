import { CCard, CRow, CCol, CCardImage, CCardBody, CCardTitle, CCardText } from "@coreui/react";

const QuizzCard = (props) => {
  return (
    <CCard className="mb-3" style={{ maxWidth: "540px" }} key={props.id}>
      <CRow className="g-0">
        <CCol md={4}>
          <CCardImage src={props.image} />
        </CCol>
        <CCol md={8}>
          <CCardBody>
            <CCardTitle>{props.title}</CCardTitle>
            <CCardText>
              {props.text+""}
            </CCardText>
            <CCardText>
              <small className="text-medium-emphasis">
                Last updated 3 mins ago
              </small>
            </CCardText>
          </CCardBody>
        </CCol>
      </CRow>
    </CCard>
  );
};

export default QuizzCard;
