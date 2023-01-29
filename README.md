# Pixelverse

Pixelverse is an AI-powered image generation social media platform that allows users to explore the boundless possibilities of AI-generated images. Our platform allows users to share, discover and interact with unique and creative images.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing

1. Clone the repository:
```
https://github.com/sharjeelyunus/pixelverse.git
```

2. Install the dependencies:
   ```
   cd client
   npm install
   
   cd server
   npm install
   ```

3. Create a `.env` file in the root directory of server and add your MongoDB, Cloudinary and OpenAI API key:
    ```
    OPENAI_API_KEY=<your_openai_api_key>
    MONGODB_URL=<your_mongo_url>
    CLOUDINARY_CLOUD_NAME=<your_cloudinary_name>
    CLOUDINARY_API_KEY=<your_cloudinary_api_key>
    CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>
    ```
4. Start the development sercer:
    ```
    cd server
    npm run start
    cd client
    npm run start
    ```
## Built with
- MERN stack (MongoDB, Express, React, Node.js)
- Typescript
- Cloudinary for image management
- OpenAI for AI-generated images
  
## Contribution guidelines

Contributions are to Pixelverse. Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on code of conduct, and the process for submitting pull requests.

## Contact

If you have any questions or feedback, please reach out to me at [sharjeel924@gmail.com](mailto:sharjeel924@gmail.com)

## Future plans

- Add authentication for users
- Add more filters and editing options
- Improving the social media aspect of the platform

