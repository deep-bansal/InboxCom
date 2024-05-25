import { fireEvent, render, screen } from "@testing-library/react";
import CustomModal from "../components/CustomModal"
describe('CustomModal component', () => {
    test('renders custom modal with title, children, and action', () => {
        const title = 'Test Modal';
        const action = 'Test Action';
        const children = <div>Test Content</div>;
        const toggleShow = jest.fn();
        const handleSubmit = jest.fn();

        render(
            <CustomModal
                title={title}
                action={action}
                show={true}
                toggleShow={toggleShow}
                handleSubmit={handleSubmit}
            >
                {children}
            </CustomModal>
        );

        const modalTitle = screen.getByText(title);
        expect(modalTitle).toBeInTheDocument();

        const modalContent = screen.getByText('Test Content');
        expect(modalContent).toBeInTheDocument();

        const closeButton = screen.getByText(/Close/i);
        expect(closeButton).toBeInTheDocument();

        const actionButton = screen.getByText(action);
        expect(actionButton).toBeInTheDocument();
    });
    test('calls toggleShow on close button click', () => {
        const toggleShow = jest.fn();
        render(
            <CustomModal
                title="Test Modal"
                action="Test Action"
                show={true}
                toggleShow={toggleShow}
                handleSubmit={() => { }}
            />
        );

        const closeButton = screen.getByText("Close");
        // console.log("this is close Button: ", closeButton)
        fireEvent.click(closeButton);
        expect(toggleShow).toHaveBeenCalled();
    });
    test('renders custom modal with title, children, and action', () => {
        const title = 'Test Modal';
        const action = 'Test Action';
        const children = <div>Test Content</div>;
        const toggleShow = jest.fn();
        const handleSubmit = jest.fn();

        render(
            <CustomModal
                title={title}
                action={action}
                show={true}
                toggleShow={toggleShow}
                handleSubmit={handleSubmit}
            >
                {children}
            </CustomModal>
        );

        const modalTitle = screen.getByText(title);
        expect(modalTitle).toBeInTheDocument();

        const modalContent = screen.getByText('Test Content');
        expect(modalContent).toBeInTheDocument();

        const closeButton = screen.getByText(/Close/i);
        expect(closeButton).toBeInTheDocument();

        const actionButton = screen.getByText(action);
        expect(actionButton).toBeInTheDocument();
    });
    test('calls toggleShow on close button click', () => {
        const toggleShow = jest.fn();
        render(
            <CustomModal
                title="Test Modal"
                action="Test Action"
                show={true}
                toggleShow={toggleShow}
                handleSubmit={() => { }}
            />
        );

        const closeButton = screen.getByText("Close");
        // console.log("this is close Button: ", closeButton)
        fireEvent.click(closeButton);
        expect(toggleShow).toHaveBeenCalled();
    });
    test('renders custom modal with title, children, and action', () => {
        const title = 'Test Modal';
        const action = 'Test Action';
        const children = <div>Test Content</div>;
        const toggleShow = jest.fn();
        const handleSubmit = jest.fn();

        render(
            <CustomModal
                title={title}
                action={action}
                show={true}
                toggleShow={toggleShow}
                handleSubmit={handleSubmit}
            >
                {children}
            </CustomModal>
        );

        const modalTitle = screen.getByText(title);
        expect(modalTitle).toBeInTheDocument();

        const modalContent = screen.getByText('Test Content');
        expect(modalContent).toBeInTheDocument();

        const closeButton = screen.getByText(/Close/i);
        expect(closeButton).toBeInTheDocument();

        const actionButton = screen.getByText(action);
        expect(actionButton).toBeInTheDocument();
    });
    test('calls toggleShow on close button click', () => {
        const toggleShow = jest.fn();
        render(
            <CustomModal
                title="Test Modal"
                action="Test Action"
                show={true}
                toggleShow={toggleShow}
                handleSubmit={() => { }}
            />
        );

        const closeButton = screen.getByText("Close");
        // console.log("this is close Button: ", closeButton)
        fireEvent.click(closeButton);
        expect(toggleShow).toHaveBeenCalled();
    });
    test('renders custom modal with title, children, and action', () => {
        const title = 'Test Modal';
        const action = 'Test Action';
        const children = <div>Test Content</div>;
        const toggleShow = jest.fn();
        const handleSubmit = jest.fn();

        render(
            <CustomModal
                title={title}
                action={action}
                show={true}
                toggleShow={toggleShow}
                handleSubmit={handleSubmit}
            >
                {children}
            </CustomModal>
        );

        const modalTitle = screen.getByText(title);
        expect(modalTitle).toBeInTheDocument();

        const modalContent = screen.getByText('Test Content');
        expect(modalContent).toBeInTheDocument();

        const closeButton = screen.getByText(/Close/i);
        expect(closeButton).toBeInTheDocument();

        const actionButton = screen.getByText(action);
        expect(actionButton).toBeInTheDocument();
    });
    test('calls toggleShow on close button click', () => {
        const toggleShow = jest.fn();
        render(
            <CustomModal
                title="Test Modal"
                action="Test Action"
                show={true}
                toggleShow={toggleShow}
                handleSubmit={() => { }}
            />
        );

        const closeButton = screen.getByText("Close");
        // console.log("this is close Button: ", closeButton)
        fireEvent.click(closeButton);
        expect(toggleShow).toHaveBeenCalled();
    });
    test('renders custom modal with title, children, and action', () => {
        const title = 'Test Modal';
        const action = 'Test Action';
        const children = <div>Test Content</div>;
        const toggleShow = jest.fn();
        const handleSubmit = jest.fn();

        render(
            <CustomModal
                title={title}
                action={action}
                show={true}
                toggleShow={toggleShow}
                handleSubmit={handleSubmit}
            >
                {children}
            </CustomModal>
        );

        const modalTitle = screen.getByText(title);
        expect(modalTitle).toBeInTheDocument();

        const modalContent = screen.getByText('Test Content');
        expect(modalContent).toBeInTheDocument();

        const closeButton = screen.getByText(/Close/i);
        expect(closeButton).toBeInTheDocument();

        const actionButton = screen.getByText(action);
        expect(actionButton).toBeInTheDocument();
    });
    test('calls toggleShow on close button click', () => {
        const toggleShow = jest.fn();
        render(
            <CustomModal
                title="Test Modal"
                action="Test Action"
                show={true}
                toggleShow={toggleShow}
                handleSubmit={() => { }}
            />
        );

        const closeButton = screen.getByText("Close");
        // console.log("this is close Button: ", closeButton)
        fireEvent.click(closeButton);
        expect(toggleShow).toHaveBeenCalled();
    });
    test('renders custom modal with title, children, and action', () => {
        const title = 'Test Modal';
        const action = 'Test Action';
        const children = <div>Test Content</div>;
        const toggleShow = jest.fn();
        const handleSubmit = jest.fn();

        render(
            <CustomModal
                title={title}
                action={action}
                show={true}
                toggleShow={toggleShow}
                handleSubmit={handleSubmit}
            >
                {children}
            </CustomModal>
        );

        const modalTitle = screen.getByText(title);
        expect(modalTitle).toBeInTheDocument();

        const modalContent = screen.getByText('Test Content');
        expect(modalContent).toBeInTheDocument();

        const closeButton = screen.getByText(/Close/i);
        expect(closeButton).toBeInTheDocument();

        const actionButton = screen.getByText(action);
        expect(actionButton).toBeInTheDocument();
    });
    test('calls toggleShow on close button click', () => {
        const toggleShow = jest.fn();
        render(
            <CustomModal
                title="Test Modal"
                action="Test Action"
                show={true}
                toggleShow={toggleShow}
                handleSubmit={() => { }}
            />
        );

        const closeButton = screen.getByText("Close");
        // console.log("this is close Button: ", closeButton)
        fireEvent.click(closeButton);
        expect(toggleShow).toHaveBeenCalled();
    });
    test('renders custom modal with title, children, and action', () => {
        const title = 'Test Modal';
        const action = 'Test Action';
        const children = <div>Test Content</div>;
        const toggleShow = jest.fn();
        const handleSubmit = jest.fn();

        render(
            <CustomModal
                title={title}
                action={action}
                show={true}
                toggleShow={toggleShow}
                handleSubmit={handleSubmit}
            >
                {children}
            </CustomModal>
        );

        const modalTitle = screen.getByText(title);
        expect(modalTitle).toBeInTheDocument();

        const modalContent = screen.getByText('Test Content');
        expect(modalContent).toBeInTheDocument();

        const closeButton = screen.getByText(/Close/i);
        expect(closeButton).toBeInTheDocument();

        const actionButton = screen.getByText(action);
        expect(actionButton).toBeInTheDocument();
    });
    test('calls toggleShow on close button click', () => {
        const toggleShow = jest.fn();
        render(
            <CustomModal
                title="Test Modal"
                action="Test Action"
                show={true}
                toggleShow={toggleShow}
                handleSubmit={() => { }}
            />
        );

        const closeButton = screen.getByText("Close");
        // console.log("this is close Button: ", closeButton)
        fireEvent.click(closeButton);
        expect(toggleShow).toHaveBeenCalled();
    });
    test('renders custom modal with title, children, and action', () => {
        const title = 'Test Modal';
        const action = 'Test Action';
        const children = <div>Test Content</div>;
        const toggleShow = jest.fn();
        const handleSubmit = jest.fn();

        render(
            <CustomModal
                title={title}
                action={action}
                show={true}
                toggleShow={toggleShow}
                handleSubmit={handleSubmit}
            >
                {children}
            </CustomModal>
        );

        const modalTitle = screen.getByText(title);
        expect(modalTitle).toBeInTheDocument();

        const modalContent = screen.getByText('Test Content');
        expect(modalContent).toBeInTheDocument();

        const closeButton = screen.getByText(/Close/i);
        expect(closeButton).toBeInTheDocument();

        const actionButton = screen.getByText(action);
        expect(actionButton).toBeInTheDocument();
    });
    test('calls toggleShow on close button click', () => {
        const toggleShow = jest.fn();
        render(
            <CustomModal
                title="Test Modal"
                action="Test Action"
                show={true}
                toggleShow={toggleShow}
                handleSubmit={() => { }}
            />
        );

        const closeButton = screen.getByText("Close");
        // console.log("this is close Button: ", closeButton)
        fireEvent.click(closeButton);
        expect(toggleShow).toHaveBeenCalled();
    });
    test('renders custom modal with title, children, and action', () => {
        const title = 'Test Modal';
        const action = 'Test Action';
        const children = <div>Test Content</div>;
        const toggleShow = jest.fn();
        const handleSubmit = jest.fn();

        render(
            <CustomModal
                title={title}
                action={action}
                show={true}
                toggleShow={toggleShow}
                handleSubmit={handleSubmit}
            >
                {children}
            </CustomModal>
        );

        const modalTitle = screen.getByText(title);
        expect(modalTitle).toBeInTheDocument();

        const modalContent = screen.getByText('Test Content');
        expect(modalContent).toBeInTheDocument();

        const closeButton = screen.getByText(/Close/i);
        expect(closeButton).toBeInTheDocument();

        const actionButton = screen.getByText(action);
        expect(actionButton).toBeInTheDocument();
    });
    test('calls toggleShow on close button click', () => {
        const toggleShow = jest.fn();
        render(
            <CustomModal
                title="Test Modal"
                action="Test Action"
                show={true}
                toggleShow={toggleShow}
                handleSubmit={() => { }}
            />
        );

        const closeButton = screen.getByText("Close");
        // console.log("this is close Button: ", closeButton)
        fireEvent.click(closeButton);
        expect(toggleShow).toHaveBeenCalled();
    });
    test('renders custom modal with title, children, and action', () => {
        const title = 'Test Modal';
        const action = 'Test Action';
        const children = <div>Test Content</div>;
        const toggleShow = jest.fn();
        const handleSubmit = jest.fn();

        render(
            <CustomModal
                title={title}
                action={action}
                show={true}
                toggleShow={toggleShow}
                handleSubmit={handleSubmit}
            >
                {children}
            </CustomModal>
        );

        const modalTitle = screen.getByText(title);
        expect(modalTitle).toBeInTheDocument();

        const modalContent = screen.getByText('Test Content');
        expect(modalContent).toBeInTheDocument();

        const closeButton = screen.getByText(/Close/i);
        expect(closeButton).toBeInTheDocument();

        const actionButton = screen.getByText(action);
        expect(actionButton).toBeInTheDocument();
    });
    test('calls toggleShow on close button click', () => {
        const toggleShow = jest.fn();
        render(
            <CustomModal
                title="Test Modal"
                action="Test Action"
                show={true}
                toggleShow={toggleShow}
                handleSubmit={() => { }}
            />
        );

        const closeButton = screen.getByText("Close");
        // console.log("this is close Button: ", closeButton)
        fireEvent.click(closeButton);
        expect(toggleShow).toHaveBeenCalled();
    });
    test('renders custom modal with title, children, and action', () => {
        const title = 'Test Modal';
        const action = 'Test Action';
        const children = <div>Test Content</div>;
        const toggleShow = jest.fn();
        const handleSubmit = jest.fn();

        render(
            <CustomModal
                title={title}
                action={action}
                show={true}
                toggleShow={toggleShow}
                handleSubmit={handleSubmit}
            >
                {children}
            </CustomModal>
        );

        const modalTitle = screen.getByText(title);
        expect(modalTitle).toBeInTheDocument();

        const modalContent = screen.getByText('Test Content');
        expect(modalContent).toBeInTheDocument();

        const closeButton = screen.getByText(/Close/i);
        expect(closeButton).toBeInTheDocument();

        const actionButton = screen.getByText(action);
        expect(actionButton).toBeInTheDocument();
    });
    test('calls toggleShow on close button click', () => {
        const toggleShow = jest.fn();
        render(
            <CustomModal
                title="Test Modal"
                action="Test Action"
                show={true}
                toggleShow={toggleShow}
                handleSubmit={() => { }}
            />
        );

        const closeButton = screen.getByText("Close");
        // console.log("this is close Button: ", closeButton)
        fireEvent.click(closeButton);
        expect(toggleShow).toHaveBeenCalled();
    });
    test('renders custom modal with title, children, and action', () => {
        const title = 'Test Modal';
        const action = 'Test Action';
        const children = <div>Test Content</div>;
        const toggleShow = jest.fn();
        const handleSubmit = jest.fn();

        render(
            <CustomModal
                title={title}
                action={action}
                show={true}
                toggleShow={toggleShow}
                handleSubmit={handleSubmit}
            >
                {children}
            </CustomModal>
        );

        const modalTitle = screen.getByText(title);
        expect(modalTitle).toBeInTheDocument();

        const modalContent = screen.getByText('Test Content');
        expect(modalContent).toBeInTheDocument();

        const closeButton = screen.getByText(/Close/i);
        expect(closeButton).toBeInTheDocument();

        const actionButton = screen.getByText(action);
        expect(actionButton).toBeInTheDocument();
    });
    test('calls toggleShow on close button click', () => {
        const toggleShow = jest.fn();
        render(
            <CustomModal
                title="Test Modal"
                action="Test Action"
                show={true}
                toggleShow={toggleShow}
                handleSubmit={() => { }}
            />
        );

        const closeButton = screen.getByText("Close");
        // console.log("this is close Button: ", closeButton)
        fireEvent.click(closeButton);
        expect(toggleShow).toHaveBeenCalled();
    });
    test('renders custom modal with title, children, and action', () => {
        const title = 'Test Modal';
        const action = 'Test Action';
        const children = <div>Test Content</div>;
        const toggleShow = jest.fn();
        const handleSubmit = jest.fn();

        render(
            <CustomModal
                title={title}
                action={action}
                show={true}
                toggleShow={toggleShow}
                handleSubmit={handleSubmit}
            >
                {children}
            </CustomModal>
        );

        const modalTitle = screen.getByText(title);
        expect(modalTitle).toBeInTheDocument();

        const modalContent = screen.getByText('Test Content');
        expect(modalContent).toBeInTheDocument();

        const closeButton = screen.getByText(/Close/i);
        expect(closeButton).toBeInTheDocument();

        const actionButton = screen.getByText(action);
        expect(actionButton).toBeInTheDocument();
    });
    test('calls toggleShow on close button click', () => {
        const toggleShow = jest.fn();
        render(
            <CustomModal
                title="Test Modal"
                action="Test Action"
                show={true}
                toggleShow={toggleShow}
                handleSubmit={() => { }}
            />
        );

        const closeButton = screen.getByText("Close");
        // console.log("this is close Button: ", closeButton)
        fireEvent.click(closeButton);
        expect(toggleShow).toHaveBeenCalled();
    });
})