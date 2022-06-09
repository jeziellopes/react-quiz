import { Blank, Home, Questions, Results } from '@presentation/pages'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions/:quizId" element={<Questions />} />
        <Route path="/results" element={<Results />} />
        <Route path="*" element={<Blank />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
