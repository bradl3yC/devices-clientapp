import styled from 'styled-components';

export const Table = styled.table`
  width: 70vh;
`;

export const TableHead = styled.thead`
  1px solid #FFF  
`;

export const TableHeadData = styled.td`
    background-color: #167F92;
    color: white;
    text-decoration: underline;
    padding: 1em;
    border-radius: 3px 3px 0 0;
`;

export const TableBody = styled.tbody`
`;

export const TableRow = styled.tr`
  &:nth-child(odd) {
    background-color: #EAF3F3
  }
`;

export const TableRowData = styled.td`
  &:first-child:hover {
    text-decoration: underline;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Sort = styled.div`
    margin-top: 5px;
    display: flex;
    width: 67vh;
    justify-content: space-evenly;
    span {
      margin-right: 5px;    
    }
    background-color: rgba(22,127,146, .4);
    padding: 15px;
    color: white;
`;

export const ButtonContainer = styled.div`
    flex-direction: row;
`;

export const ModalButton = styled.button`
    width: 100px;
`;

export const ModalInput = styled.input`
  margin-bottom: 5px;
`;

export const ModalSelect = styled.select`
`;

export const ModalOption = styled.option`
`;

export const ModalForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const ModalLabel = styled.span`
  color: #fff;
  margin: 5px 0;
`;

export const Label = styled.span`
`;

export const Button = styled.button``;

export const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(22,127,146, .4)',
  },
  content: {
    backgroundColor: '#167F92',
    width: '25%',
    height: '15%',
    left: '38%',
    top: '15%',
  },
};
