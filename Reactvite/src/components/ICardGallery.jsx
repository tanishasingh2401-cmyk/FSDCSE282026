import ICard from "./ICard";
import studentimage from '../images/image.jpg';
import dolphin from "../images/dolphin.jpg";
import leopard from "../images/leopard.jpg";
import lizard from "../images/lizard.jpg";
import snake from "../images/Snake.jpg";

function ICardGallery() {
    const students=[{
        pic:studentimage,
        roll:"12345",
        name:"Tanisha",
        branch:"CSE",
        college:"ABES Engineering College"
    },
    {
        pic:lizard,
        roll:"45734",
        name:"Tanish",
        branch:"CSE-AIML",
        college:"ABES Engineering College"
    },
    {
        pic:leopard,
        roll:"12345",
        name:"Suhani",
        branch:"CSE-DS",
        college:"ABES Engineering College"
    },
    {
        pic:dolphin,
        roll:"22025",
        name:"Sneha",
        branch:"CSE-AIML",
        college:"ABES Engineering College"
    },
    {
        pic:snake,
        roll:"13545",
        name:"Siya",
        branch:"CSE-DS",
        college:"ABES Engineering College"
    }
  ]
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
     {/*} <ICard img={studentimage} rollno="2400320101129" name="Suhani Saraswat" branch="Computer Science and Engineering" section="28" />
      <ICard img={studentimage} rollno="2400320101130" name="John Doe" branch="Electrical Engineering" section="29" />
      <ICard img={studentimage} rollno="2400320101131" name="Jane Smith" branch="Mechanical Engineering" section="30" />*/}
    {/* <ICard data={students[1]} />*/}
    {
      students.map((ele)=>(
       <ICard data={ele} />

      ))
    }
    </div>
  );
}

export default ICardGallery;