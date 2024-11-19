// Робимо шлях абсолютним //
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath( import.meta.url )
const __dirname = path.dirname( __filename )

const filePath = path.join(__dirname, '/data/todoData.json')


export default {
	dataPath: filePath
}