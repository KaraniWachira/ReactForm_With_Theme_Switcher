import './App.css';
import LoginForm from './Components/LoginForm';


function App() {
const onSubmit = (data)=> {
  console.log(data);
}
const handleChangeTheme = () => {
  setTheme("dark");
};


  return (
<>
  <ThemeProvider  handleChangeTheme={handleChangeTheme}>
    <LoginForm onSubmit={onSubmit} /> 
  </ThemeProvider>
  </>
  )
};
export default App;
