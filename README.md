
# Claude VS GPT Natural Language Programming
# NutriChef

**NutriChef** is an innovative app designed to showcase the capabilities of advanced NLP (Natural Language Processing) programs, specifically Claude and GPT. The main purpose of NutriChef is to demonstrate how these AI technologies can assist users in creating personalized meals by selecting ingredients and providing detailed nutritional information.

## Key Features

1. **Ingredient Selection**
   - Users can choose from a wide variety of ingredients to prepare their desired meals.
   - The app offers an intuitive interface to browse and select ingredients effortlessly.

2. **Nutritional Information**
   - NutriChef provides comprehensive nutritional values for each ingredient chosen.
   - Users receive a detailed breakdown of the nutritional content of their selected meal, including calories, proteins, fats, carbohydrates, vitamins, and minerals.

3. **AI-Powered Assistance**
   - The app leverages the power of NLP programs Claude and GPT to enhance the user experience.

4. **Interactive Meal Planning**
   - NutriChef allows users to create a list of all selected ingredients.
   - The app helps in organizing and modifying the ingredient list, ensuring a seamless meal planning process.

5. **Educational Insights**
   - The app educates users about the benefits of different ingredients and their impact on health.
   - Users can learn how to make healthier food choices and tailor their meals to specific dietary needs.

## Purpose

NutriChef is not just a meal planning tool; it is a platform to explore the remarkable abilities of NLP-driven AI programs. By integrating Claude and GPT, the app demonstrates how AI can understand, interpret, and respond to natural language inputs, making the process of meal preparation smarter and more efficient.

Whether you're a health enthusiast, a curious cook, or someone interested in AI technology, NutriChef offers a unique blend of culinary creativity and cutting-edge AI, making it the perfect app to discover the future of intelligent meal planning.

## Getting Started

To get started with NutriChef, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/ChayaLipshitz/NutriChef-AI.git
   ```
2. Navigate to the project directory:
   ```bash
   cd NutriChef-AI/salad
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Run the app:
   ```bash
   npm start
   ```

## Switching Between GPT and Claude Components

To switch between the GPT and Claude components in NutriChef, follow these steps:

1. Open the \`index.js\` file in the project directory.
2. Choose the desired component (GPT or Claude) by uncommenting the respective import statement and commenting out the other. For example:
   ```javascript
   // Choose GPT component
    {/* <AppClaude/> */}
    <AppGPT/>

   // Import GPT component's CSS
   import './GPT/styles.css'
   // import './cluade/App.css';
   ```
   To switch to Claude, simply reverse the comments:
   ```javascript
   // Choose GPT component
   <AppClaude/>
    {/* <AppGPT/> */}

   // Import GPT component's CSS
   //  import './GPT/styles.css'
   import './cluade/App.css';
   ```

3. Save the \`index.js\` file and restart the app:
   ```bash
   npm start
   ```

## Contributing

We welcome contributions from the community! If you'd like to contribute to NutriChef, please fork the repository and create a pull request with your changes.


## Contact

For questions or feedback, please reach out to [chl4165772@gmail.com](mailto:chl4165772@gmail.com).

---

Thank you for using NutriChef! Enjoy your personalized meal planning experience with the power of AI.
