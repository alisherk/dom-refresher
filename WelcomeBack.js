const WelcomeBack = () => {
  const [name, setName] = React.useState('Alisher'); 
  
  return (
    <div style={{ padding: 20 }}>
      <h2>Hello {name}. Welcome back</h2>
    </div>
  );
};
