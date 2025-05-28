import {Router} from "express";
import {param, body} from "express-validator";
import {handleInputErrors} from "../middleware/handleErrors";
import {AuthController} from "../controllers/AuthControllers";

const router = Router()

router.post('/create-account',
    body("name")
        .notEmpty().withMessage("Name is required"),
    body("password")
        .isLength({min:8}).withMessage("Password is short, minimum 8 characters"),
    body("confirmPassword").custom((value, {req})=>{
        if(req.body.password != value){
            throw new Error('Passwords are different')
        }
        return true
    }),
    body("email")
        .isEmail().withMessage("Email is invalidate"),
    handleInputErrors,
    AuthController.createAccount
)

router.post('/confirm-account',
    body("token")
        .notEmpty().withMessage("Token is required"),
    handleInputErrors,
    AuthController.confirmAccount
)

router.post('/login',
    body("email")
        .isEmail().withMessage("Email is required"),
    body("password")
        .notEmpty().withMessage("Password is required"),
    handleInputErrors,
    AuthController.loginAccount
)

router.post('/request-token',
    body("email")
        .isEmail().withMessage("Email is required"),
    handleInputErrors,
    AuthController.requestToken
)

router.post('/forget-password',
    body("email")
        .isEmail().withMessage("Email is required"),
    handleInputErrors,
    AuthController.forgetPassword
)

router.post('/validate-token',
    body("token")
        .notEmpty().withMessage("Token is required"),
    handleInputErrors,
    AuthController.validateToken
)

router.post('/update-password/:token',
    param("token")
        .isString().withMessage("Token must be a string")
        .notEmpty().withMessage("Token is required"),
    body("password")
        .isLength({min:8}).withMessage("Password is short, minimum 8 characters"),
    body("confirmPassword").custom((value, {req}) =>{
        if(req.body.password!=value){
            throw new Error("Passwords do not match")
        }
        return true
    }),
    handleInputErrors,
    AuthController.updatePassword
)
export default router