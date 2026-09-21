import ICard from "./ICard";
import studentimage from '../images/image.jpg'
function ICardGallery() {
    const students={
        pic:{studentimage},
        roll:"12345",
        name:"Tanisha",
        branch:"CSE",
        college:"ABES Engineering College"
    }
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
     {/*} <ICard img={studentimage} rollno="2400320101129" name="Suhani Saraswat" branch="Computer Science and Engineering" section="28" />
      <ICard img={studentimage} rollno="2400320101130" name="John Doe" branch="Electrical Engineering" section="29" />
      <ICard img={studentimage} rollno="2400320101131" name="Jane Smith" branch="Mechanical Engineering" section="30" />*/}
     <ICard data={students} />
    </div>
  );
}

export default ICardGallery;