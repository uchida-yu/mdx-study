import styled from "styled-components";

function Question({ className, choises, answer }) {
    const clickhandler = (index) => {
      console.log(index, answer)
      if(index === answer) {
        alert('正解')
      }else{
        alert('ハズレ')
      }
    }

  return (
    <div className={className}>
      <div>Question</div>
      <ul>
        {choises.map((item, i) => (
          <li key={item} onClick={() => clickhandler(i)}>{i + 1}. {item}</li>
        ))}
      </ul>
    </div>
  );
}
const styledQuestion = styled(Question)`
  border: 1px solid blue;
  border-radius: 5px;
  padding: 10px;
  & ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0;
    li {
      background-color: lightblue;
      border-radius: 5px;
      padding: 5px;
      cursor: pointer;
      &:hover {
        background-color: pink;
      }
    }
  }
`
export default styledQuestion;