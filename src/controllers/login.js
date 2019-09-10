import {User} from '../models'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


export const register=user=>{
  let newUser = new User(user)
  newUser.password = bcrypt.hashSync(user.password, 10);
  newUser.status = true;
  return newUser.save()
    .then(savedUser=>savedUser)
    .catch(error=>({error}))
}

export const startSession = (email,password) => {
    let message;
    let query = {email};
    return User
        .findOne(query)
        .then(user => {
            if (user == null) {
                let error = 'Autenticación falló, Usuario no encontrado';
                return ({error});
            }
            else if (user) {

                if (!bcrypt.compareSync(password, user.password)) {
                    let error = 'Autenticación falló. Contraseña incorrecta.';
                    return ({error});
                }
                else {

                    let token = jwt.sign({_id: user.id,role: 'Admin' }, process.env.SECRET_KEY, { expiresIn: "8d" });
                    let response = {
                        message: 'Credentiales correctas, toma tu token',
                        token: token
                    };

                    return response;
                }
            }
        })
        .catch((error) => {
            console.log(error)
            return ({error});
        });
};
