import { SocketProvider } from "@/provider/SocketProvider";

export default function AttendanceLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <SocketProvider>
            {children}
        </SocketProvider>
    )
}