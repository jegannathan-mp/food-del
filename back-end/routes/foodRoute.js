import expresss from 'express';
import { addFood, listFood, removeFood } from '../controllers/foodController.js';
import multer from 'multer'     //image storage system

const foodRouter = expresss.Router();

// Image storage engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file, cb)=>{
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage});

foodRouter.post("/add", upload.single("image"),addFood);
foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);

export default foodRouter;