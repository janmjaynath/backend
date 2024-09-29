class ApiError extends Error{
  constructor(
    statusCode,
    messages
  )
  {
    super(statusCode,messages)
    this.statusCode = statusCode,
    this.messages = messages
  }
}

export {ApiError}