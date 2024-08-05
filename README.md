# CV Generator

This project is a web application that allows users to create their CV interactively, with customization options and the ability to download the CV in PDF format. The application supports multiple languages (English and Spanish) and allows easy and dynamic editing of fields.

## Features

- **Dynamic Creation and Editing**: Users can add and modify data in editable fields directly in the interface.
- **Drag and Drop**: Functionality to rearrange sections and items using drag-and-drop.
- **Multi-language Support**: The application supports English and Spanish using `react-i18next`.
- **PDF Download**: Users can download their CV in PDF format using `react-pdf/renderer`.
- **PDF Preview**: Preview the CV in a new route (/pdfpreview).
- **Harvard College Template**: Based on the Harvard College Bullet Point Resume template.

## Technologies Used

- **Frontend**: React.js
- **State Management**: Context API
- **Styling**: CSS, Flexbox, Grid
- **PDF Generation**: `react-pdf/renderer`
- **Multi-language Support**: `react-i18next`
- **Others**: `react-beautiful-dnd` for drag-and-drop, `react-router-dom` for routing

## Installation and Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/mvazquezmartin/cv_generator.git
    cd cv_generator
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the application:
    ```bash
    npm start
    ```

4. Open in your browser:
    ```
    http://localhost:3000
    ```

## Usage

1. Enter data in the provided fields.
2. Use the drag-and-drop functionality to rearrange sections.
3. Change the language using the language selector in the interface.
4. Preview the CV on the `/pdfpreview` route.
5. Download the CV in PDF format.

## Contributions

Contributions are welcome. Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Make the necessary changes and commit (`git commit -m 'Add new feature'`).
4. Push your changes (`git push origin feature/new-feature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
