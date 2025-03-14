import Navbar from '~/Components/Main/NavBar'

const NotFound = () => {
  return (
    <>
    <Navbar/>
    <div className="h-screen  flex justify-center items-center">
        <h1 className="text-4xl font-bold text-center">
          Page Not Found
        </h1>
      </div>
    </>
  )
}

export default NotFound
