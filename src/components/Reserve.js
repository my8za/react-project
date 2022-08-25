import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";


function Reserve({ title }) {
  const [isCheck, setCheck] = useState(false);
  const [seat, setSeat] = useState([]);
  const [time, setTime] = useState('');
  const [account, setAccount] = useState('');

  const today = new Date();

  const mon = parseInt(today.getMonth()) + 1;

  const todayDate = today.getFullYear() + "/" + mon + "/" + today.getDate();

  const OPTIONS = [
    { value: "선택하세요", name: "선택하세요" },
    { value: todayDate + " 09:00", name: todayDate + " 09:00" },
    { value: todayDate + " 12:00", name: todayDate + " 12:00" },
    { value: todayDate + " 15:00", name: todayDate + " 15:00" },
    { value: todayDate + " 18:00", name: todayDate + " 18:00" },
    { value: todayDate + " 21:00", name: todayDate + " 21:00" }
  ];

  function selectTime(time) {
    setTime(time);
  }

  const handleChange = (e) => {
    selectTime(e.target.value);
  };

  function handleInput(event) { //자리선택
    const btns = document.getElementsByClassName('seat-btn');

    for (let i = 0; i < btns.length; i++) {
      if (event.target.value === btns[i].value) {
        if (event.target.classList.contains('selected')) {
          event.target.classList.remove('selected');
          const fileteredSeats = seat.filter((seat) => seat !== event.target.value)
          setSeat(fileteredSeats);
        } else {
          event.target.classList.add('selected');
          setSeat(seat.concat(event.target.value));
        }
      }
    }
  }


  function Boxs() {
    let boxArray = [];
    for (let i = 1; i < 4; i++) {
      for (let j = 1; j < 11; j++) {
        if (j === 10) {
          boxArray.push(<br />)
        } else {
          boxArray.push(<button value={`${i}-${j}`}
            onClick={e => handleInput(e)}
            className="seat-btn"
          >
            {i}-{j}
          </button>)
        }
      }
    }

    return boxArray;
  };

  const onChangeAccount = (e) => {
    setAccount(e.target.value);
  };

  let navigate = useNavigate();

  const checkDate = (value) => {
    let nowTime = parseInt(today.getHours()) * 60 + parseInt(today.getMinutes());

    if (seat.length === 0) {
      alert('좌석을 하나이상 선택해 주세요!!');
    } else if (account === '') {
      alert('예매자를 입력해 주세요!!');
    } else if (time === '') {
      alert('시간을 선택해 주세요!!');
    } else if (time !== '') {
      let chooseTime = time.split(' ');
      chooseTime = chooseTime[1].split(':');
      chooseTime = parseInt(chooseTime[0]) * 60 + parseInt(chooseTime[1]);
      if (chooseTime < nowTime) {
        alert('현재시간보다 지난 시간은 선택할수없습니다.\n 시간을 다시 선택해 주세요!!');
      } else {
        navigate("/resfinished", { state: value })
      }
    } else {
      navigate("/resfinished", { state: value })
    }
  }

  return (
    <>
      <div>
        <button className="btn--reserve" onClick={() => { setCheck((e) => !e); }}>
          {isCheck ? '화면닫기' : "예약하기"}
        </button>
      </div>

      {isCheck && (
        <div className="cinema">
          <h3 className="comment">좌석을선택하십시오.</h3>
          <div className="screen">Screen</div>
          {Boxs()}
          <div className="purchaser">
            <a style={{ color: "black" }}>예매자 : </a>
            <input type="text" onChange={onChangeAccount}></input>
          </div>
          <div className="screening-shedule">
            <a style={{ color: "black" }}>상영시간선택 : </a>
            <select onChange={handleChange}>
              {OPTIONS.map((option) => (<option>{option.value}</option>))}
            </select>
          </div>

          <button className="complete" onMouseUp={() => checkDate({
            title,
            seat,
            time,
            name: account
          })}
          >완료
          </button>
        </div>
      )}
    </>
  );
}

export default Reserve;