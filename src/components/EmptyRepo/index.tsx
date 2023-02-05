const EmptyState = () => {
  return (
    <div style={{ textAlign: 'center', position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '20vh' }}>
      <img src="https://img.icons8.com/officel/256/empty-box.png" />
      <h4 style={{ color: 'rgb(58, 58, 58)' }}>Repos Not Found!</h4>
    </div>
  )
}

export default EmptyState