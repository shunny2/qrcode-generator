import { ChangeEvent, useState } from 'react'
import { QrCode as QrIcon } from 'phosphor-react'

import QRCode from 'react-qr-code'
import QRCodeLink from 'qrcode'

export function QrCode() {
    const [link, setLink] = useState('')
    const [qrCodeLink, setqrCodeLink] = useState('')

    function handleGenerate(link: string) {
        QRCodeLink.toDataURL(link, {
            width: 600,
            margin: 3
        }, function (err, url) {
            setqrCodeLink(url)
        })
    }

    function handleQrCode(event: ChangeEvent<HTMLInputElement>) {
        event.preventDefault()
        
        setLink(event.target.value)
        handleGenerate(event.target.value)
    }

    return (
        <div className='w-screen h-screen bg-black flex flex-col px-4 gap-4 items-center justify-center text-black'>
            <QRCode value={link} />

            <div className='flex items-center h-12 w-full max-w-[400px] py-4 px-3 rounded bg-emerald-50 focus-within:ring-2 ring-emerald-500'>
                <input
                    className='bg-transparent flex-1 text-black text-xs placeholder:text-black outline-none'
                    type='text'
                    placeholder='Digite seu link...'
                    value={link}
                    onChange={(e) => handleQrCode(e)}
                />
            </div>

            <a
                className='flex items-center justify-between px-4 h-14 w-full max-w-[180px] bg-emerald-500 rounded font-semibold text-black text-md transition-colors hover:bg-emerald-600 cursor-pointer focus:ring-2 ring-white'
                href={qrCodeLink} download={`qrcode.png`}
            >
                Baixar QR Code
                <QrIcon size={32} />
            </a>
        </div>
    )
}