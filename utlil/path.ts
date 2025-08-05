import path from 'path';
import { fileURLToPath } from 'url';

// Convert the module's URL to a file path
const __filename = fileURLToPath(import.meta.url);
// Get the directory name of the current module
const __dirname = path.dirname(__filename);

// Export the directory name for use in other modules
export default __dirname;