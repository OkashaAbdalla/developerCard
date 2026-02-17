import Skill from "./Skill";

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="Graphic Designer" emoji="👶" color="#FF3E00" />

      <Skill skill="HTML+CSS" emoji="👍" color="#E34F26" />
      <Skill skill="JavaScript" emoji="✨" color="#F7DF1E" />
      <Skill skill="React" emoji="💪" color="#61DAFB" />
    </div>
  );
}

export default SkillList;
