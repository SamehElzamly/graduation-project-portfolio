import { Box } from "./Box";
import tool1Image from '../public/t1.jpg'
import tool2Image from '../public/t2.jpeg'
import tool3Image from '../public/t3.jpg'
import tool4Image from '../public/t4.jpg'
import tool5Image from '../public/t5.jpg'
import tool6Image from '../public/t6.jpg'
import tool7Image from '../public/t7.jpg'
import tool8Image from '../public/t8.jpg'
import tool9Image from '../public/t9.jpeg'
import tool10Image from '../public/t10.jpeg'
import tool11Image from '../public/t11.jpg'
export function Fundmentals() {
    return(
        <div id="Fundementals">
            <h1 className='h1Bottom'>Fundementals</h1>
            <div>
                <Box toolName="Tkinter" toolImage={tool1Image} toolDescription='Tkinter is the most commonly used library for developing GUI in Python'/>
                <Box toolName="PIL" toolImage={tool2Image} toolDescription='Python Imaging Library is a free and open-source additional library for the Python programming language that adds support for opening, manipulating, and saving many different image file formats.'/>
                <Box toolName="Mysql.connector" toolImage={tool4Image} toolDescription='Is a Python library that provides a standardized way to connect to a MySQL database from Python.'/>
                <Box toolName="CVLib " toolImage={tool5Image} toolDescription=' Is a Python library built on top of the popular computer vision library OpenCV. cvlib provides easy-to-use APIs for common computer vision tasks, such as object detection, face recognition, and image classification.
                '/>
                <Box toolName="OS" toolImage={tool6Image} toolDescription='Is a built-in library in Python that provides a way to interact with the operating system, such as accessing files and directories, managing processes, and working with environment variables.'/>
                <Box toolName="NumPy " toolImage={tool7Image} toolDescription='Is a Python library that provides support for large, multi-dimensional arrays and matrices, as well as a large collection of high-level mathematical functions to operate on these arrays.'/>
                <Box toolName="Openpyxl " toolImage={tool8Image} toolDescription='Is a Python library for working with Excel spreadsheets. It provides a simple and intuitive way to read, write, and modify Excel files, including support for complex data structures such as charts, images, and pivot tables.'/>
                <Box toolName="YOLO " toolImage={tool9Image} toolDescription='Is a Python library that provides support for large, multi-dimensional arrays and matrices, as well as a large collection of high-level mathematical functions to operate on these arrays.'/>
                <Box toolName="Roboflow " toolImage={tool10Image} toolDescription='Is a Python library that provides support for large, multi-dimensional arrays and matrices, as well as a large collection of high-level mathematical functions to operate on these arrays.'/>
                <Box toolName="Facenet " toolImage={tool11Image} toolDescription='Is a Python library that provides support for large, multi-dimensional arrays and matrices, as well as a large collection of high-level mathematical functions to operate on these arrays.'/>
                </div>
        </div>
    );
    
}