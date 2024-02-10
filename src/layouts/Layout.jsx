import { Outlet } from "react-router-dom"
import ReactModal from "react-modal"
import Sidebar from "../components/main/Sidebar"
import Summary from "../components/main/Summary"
import useKiosk from "../hooks/useKiosk"
import { ModalProduct } from "../components/modal/ModalProduct"

const customStylesModal = {
    overlay: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    content: {
        position: "static"
    }
}

export default function Layout() {
    const { modal, handleClickModal, selectedProduct } = useKiosk()

    return (
        <>
            <div className="flex flex-col md:flex-row">
                <Sidebar/>
                
                <main className="flex-1 p-2 h-svh overflow-y-auto scrollbar-thin">
                    <Outlet />
                </main>

                <Summary/>
            </div>

            <ReactModal
                isOpen={ modal }
                onRequestClose={ handleClickModal }
                style={ customStylesModal }
                ariaHideApp={ false }
            >
                <ModalProduct product={selectedProduct}/>
            </ReactModal>
        </>
    )
}
