import chalk from 'chalk'
/**
 * Serve the server
 * @param {Server} app - Server to run
 * @param {Number} port - Port number to run the server
 */
export const serve = (app, port) => {
  app.listen(port, error => {
    if (error)
      console.log('%s An error ocurred: %s ', chalk.green('✓'), error)
    else
      console.log('%s App is running at http://localhost:%d',chalk.green('✓'),port)
      console.log(process.env.NODE_ENV)
  })
}
