import ratings from '@mtucourses/rate-my-professors';

export const getProfessor = async() => {
  const schools = await ratings.searchSchool('simon fraser university');
  const professors = await ratings.searchTeacher("Janice Regan ", 
  schools[0].id);
  const profData = await ratings.getTeacher(professors[0].id);
}