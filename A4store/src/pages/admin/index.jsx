import React from 'react'

const AdminHome = () => {
  return <div>Admin home</div>
}

export default AdminHome

AdminHome.getLayout = function PageLayout(page) {
  return <>{page}</>
}
