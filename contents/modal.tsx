import * as Dialog from '@radix-ui/react-dialog'
import cssText from 'data-text:~styles/main.content.css'
import { useEffect, useState } from 'react'

// Inject style sheet into shadow root
export const getStyle = () => {
  const style = document.createElement('style')
  style.textContent = cssText.replaceAll(':root', ':host')
  return style
}

const Prompt = () => {
  return (
    <li
      className="group relative flex h-28 flex-col justify-between rounded-xl border border-interactive bg-surface-1 p-4 transition-all hover:bg-surface-3 focus:bg-surface-3"
      role="button"
      aria-disabled="true"
      title="An Ethereum Developer"
      tabIndex={0}>
      <h5 className="pr-3 text-xs font-medium">An Ethereum Developer</h5>{' '}
      <p className="text-xs text-subtle transition-all group-hover:text-muted group-focus:text-muted">
        Awesome ChatGPT Prompts
      </p>
      <button className="absolute right-1 top-1 p-1 text-zinc-500 transition-all hover:text-accent-8">
        <svg
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="100%">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
        </svg>
      </button>
    </li>
  )
}

const tabs = [
  { name: 'General', href: '#', current: true },
  { name: 'Favorites', href: '#', current: false },
  { name: 'Suggested', href: '#', current: false }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Tabs = () => (
  <div className="flex justify-center">
    <nav className="flex space-x-4" aria-label="Tabs">
      {tabs.map((tab) => (
        <a
          key={tab.name}
          href={tab.href}
          className={classNames(
            tab.current
              ? 'bg-gray-12 text-gray-1'
              : 'text-muted hover:text-subtle',
            'rounded-md px-2 py-1 text-sm font-medium'
          )}
          aria-current={tab.current ? 'page' : undefined}>
          {tab.name}
        </a>
      ))}
    </nav>
  </div>
)

const Navigation = () => {
  const navigation = [
    {
      name: 'Chat',
      href: '#',
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 256 256"
          {...props}>
          <path
            d="M96,174.19l56-32.33v36.95L107.5,204.5a48,48,0,0,1-66.4-64.08h0A48,48,0,0,0,51.5,148.5ZM204.5,107.5,160,81.81l-32,18.48,56,32.33V184a48,48,0,0,1-1.81,13h0A48,48,0,0,0,204.5,107.5ZM104,77.19,148.5,51.5a47.77,47.77,0,0,1,12.19-5v0A48,48,0,0,0,72,72v51.38l32,18.48Z"
            opacity="0.2"></path>
          <path d="M224.32,114.24a56,56,0,0,0-60.07-76.57A56,56,0,0,0,67.93,51.44a56,56,0,0,0-36.25,90.32A56,56,0,0,0,69,217,56.39,56.39,0,0,0,83.59,219a55.75,55.75,0,0,0,8.17-.61,56,56,0,0,0,96.31-13.78,56,56,0,0,0,36.25-90.32ZM182.85,54.43a40,40,0,0,1,28.56,48c-.95-.63-1.91-1.24-2.91-1.81L164,74.88a8,8,0,0,0-8,0l-44,25.41V81.81l40.5-23.38A39.76,39.76,0,0,1,182.85,54.43ZM144,137.24l-16,9.24-16-9.24V118.76l16-9.24,16,9.24ZM80,72a40,40,0,0,1,67.53-29c-1,.51-2,1-3,1.62L100,70.27a8,8,0,0,0-4,6.92V128l-16-9.24ZM40.86,86.93A39.75,39.75,0,0,1,64.12,68.57C64.05,69.71,64,70.85,64,72v51.38a8,8,0,0,0,4,6.93l44,25.4L96,165,55.5,141.57A40,40,0,0,1,40.86,86.93ZM73.15,201.57a40,40,0,0,1-28.56-48c.95.63,1.91,1.24,2.91,1.81L92,181.12a8,8,0,0,0,8,0l44-25.41v18.48l-40.5,23.38A39.76,39.76,0,0,1,73.15,201.57ZM176,184a40,40,0,0,1-67.52,29.05c1-.51,2-1.05,3-1.63L156,185.73a8,8,0,0,0,4-6.92V128l16,9.24Zm39.14-14.93a39.75,39.75,0,0,1-23.26,18.36c.07-1.14.12-2.28.12-3.43V132.62a8,8,0,0,0-4-6.93l-44-25.4,16-9.24,40.5,23.38A40,40,0,0,1,215.14,169.07Z"></path>
        </svg>
      ),
      current: true
    },
    {
      name: 'Writer',
      href: '#',
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 256 256"
          {...props}>
          <path
            d="M128,48,68.32,70.38a8,8,0,0,0-5.08,6.17L40,216l139.45-23.24a8,8,0,0,0,6.17-5.08L208,128Zm-4,104a20,20,0,1,1,20-20A20,20,0,0,1,124,152Z"
            opacity="0.2"></path>
          <path d="M248,92.68a15.86,15.86,0,0,0-4.69-11.31L174.63,12.68a16,16,0,0,0-22.63,0L123.57,41.11l-58,21.77A16.06,16.06,0,0,0,55.35,75.23L32.11,214.68A8,8,0,0,0,40,224a8.4,8.4,0,0,0,1.32-.11l139.44-23.24a16,16,0,0,0,12.35-10.17l21.77-58L243.31,104A15.87,15.87,0,0,0,248,92.68Zm-69.87,92.19L63.32,204l47.37-47.37a28,28,0,1,0-11.32-11.32L52,192.7,71.13,77.86,126,57.29,198.7,130ZM112,132a12,12,0,1,1,12,12A12,12,0,0,1,112,132Zm96-15.32L139.31,48l24-24L232,92.68Z"></path>
        </svg>
      ),
      current: false
    },
    {
      name: 'Extract',
      href: '#',
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 256 256"
          {...props}>
          <path
            d="M216,80c0,26.51-39.4,48-88,48S40,106.51,40,80s39.4-48,88-48S216,53.49,216,80Z"
            opacity="0.2"></path>
          <path d="M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64ZM69.61,53.08C85.07,44.65,105.81,40,128,40s42.93,4.65,58.39,13.08C200.12,60.57,208,70.38,208,80s-7.88,19.43-21.61,26.92C170.93,115.35,150.19,120,128,120s-42.93-4.65-58.39-13.08C55.88,99.43,48,89.62,48,80S55.88,60.57,69.61,53.08ZM186.39,202.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z"></path>
        </svg>
      ),
      current: false
    }
  ]
  return (
    <ul role="list" className="flex flex-col items-center space-y-1">
      {navigation.map((item) => (
        <li key={item.name} title={item.name}>
          <a
            href={item.href}
            className={classNames(
              item.current
                ? 'bg-surface-3 text-body'
                : 'text-muted hover:bg-surface-2 hover:text-subtle',
              'group flex gap-x-3 rounded-md p-3 text-sm font-semibold leading-6'
            )}>
            <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
            <span className="sr-only">{item.name}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}

const Modal = () => {
  const [open, setOpen] = useState(false)
  const [prompts, setPrompts] = useState(12)
  const closeModal = () => setOpen(false)
  useEffect(() => {
    const handleMessage = (message, sender, sendResponse) => {
      if (message.action === 'openModal') {
        setOpen(true) // Open the modal
        sendResponse({ status: 'Modal opened' })
      }
    }
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false) // Close the modal if 'Esc' is pressed
      }
    }

    // Add message listener
    chrome.runtime.onMessage.addListener(handleMessage)
    // Add keydown listener for the 'Esc' key
    window.addEventListener('keydown', handleKeyDown)

    // Clean up listeners when the component unmounts
    return () => {
      chrome.runtime.onMessage.removeListener(handleMessage)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])
  return (
    <Dialog.Root open={open}>
      <Dialog.Overlay
        className="data-[state=open]:animate-overlayShow bg-overlay fixed inset-0 z-50"
        onClick={closeModal}
      />
      <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid  size-full max-h-[800px] max-w-5xl translate-x-[-50%] translate-y-[-50%] grid-cols-[64px_1fr] rounded-3xl bg-surface-0 shadow-xl">
        <div
          id="sidebar"
          className="flex h-full w-full flex-col items-center justify-between rounded-l-3xl border-r border-ui py-4">
          <div className="px-2">
            <svg
              className="size-9"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              fill="none">
              <path
                className="fill-primary-9"
                d="M31.3556 33.9793L35.8885 31.4003C37.0944 30.7142 37.8391 29.4336 37.8391 28.0462V22.1645L19.2888 11.9272V9.11772C19.2888 7.74686 20.7595 6.40766 21.9597 7.07002L37.8391 15.8333V11.9538C37.8391 10.5664 37.0944 9.28582 35.8885 8.59974L21.6612 0.504885C20.4781 -0.168296 19.0277 -0.168295 17.8446 0.504886L12.0636 3.79404V12.9982L31.3556 23.9747V33.9793Z"
              />
              <path
                className="fill-gray-12"
                d="M8.15019 6.02066L3.61726 8.59974C2.41142 9.28583 1.66667 10.5664 1.66667 11.9538L1.66667 17.8355L20.217 28.0728L20.217 30.8823C20.217 32.2531 18.7463 33.5923 17.5461 32.93L1.66667 24.1667L1.66667 28.0462C1.66667 29.4336 2.41142 30.7142 3.61726 31.4003L17.8446 39.4951C19.0277 40.1683 20.4781 40.1683 21.6612 39.4951L27.4422 36.206L27.4422 27.0018L8.15019 16.0253L8.15019 6.02066Z"
              />
            </svg>
          </div>
          <Navigation />
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-6 text-muted hover:text-subtle"
              fill="currentColor"
              viewBox="0 0 256 256">
              <path
                d="M230.1,108.76,198.25,90.62c-.64-1.16-1.31-2.29-2-3.41l-.12-36A104.61,104.61,0,0,0,162,32L130,49.89c-1.34,0-2.69,0-4,0L94,32A104.58,104.58,0,0,0,59.89,51.25l-.16,36c-.7,1.12-1.37,2.26-2,3.41l-31.84,18.1a99.15,99.15,0,0,0,0,38.46l31.85,18.14c.64,1.16,1.31,2.29,2,3.41l.12,36A104.61,104.61,0,0,0,94,224l32-17.87c1.34,0,2.69,0,4,0L162,224a104.58,104.58,0,0,0,34.08-19.25l.16-36c.7-1.12,1.37-2.26,2-3.41l31.84-18.1A99.15,99.15,0,0,0,230.1,108.76ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"
                opacity="0.2"></path>
              <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm109.94-52.79a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A111.92,111.92,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.63a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21Zm-15,34.91-28.57,16.25a8,8,0,0,0-3,3c-.58,1-1.19,2.06-1.81,3.06a7.94,7.94,0,0,0-1.22,4.21l-.15,32.25a95.89,95.89,0,0,1-25.37,14.3L134,199.13a8,8,0,0,0-3.91-1h-.19c-1.21,0-2.43,0-3.64,0a8.1,8.1,0,0,0-4.1,1l-28.84,16.1A96,96,0,0,1,67.88,201l-.11-32.2a8,8,0,0,0-1.22-4.22c-.62-1-1.23-2-1.8-3.06a8.09,8.09,0,0,0-3-3.06l-28.6-16.29a90.49,90.49,0,0,1,0-28.26L61.67,97.63a8,8,0,0,0,3-3c.58-1,1.19-2.06,1.81-3.06a7.94,7.94,0,0,0,1.22-4.21l.15-32.25a95.89,95.89,0,0,1,25.37-14.3L122,56.87a8,8,0,0,0,4.1,1c1.21,0,2.43,0,3.64,0a8,8,0,0,0,4.1-1l28.84-16.1A96,96,0,0,1,188.12,55l.11,32.2a8,8,0,0,0,1.22,4.22c.62,1,1.23,2,1.8,3.06a8.09,8.09,0,0,0,3,3.06l28.6,16.29A90.49,90.49,0,0,1,222.9,142.12Z"></path>
            </svg>
          </div>
        </div>
        <div
          id="content"
          className="grid h-full grid-rows-[60px_1fr] rounded-r-3xl">
          <header id="header" className="h-full w-full rounded-tr-3xl">
            <div className="flex h-full items-center justify-between px-6">
              <div className="border-ui-subtle flex w-full items-center justify-between border-b pb-2">
                <h1 className="text-xl font-medium">Chat</h1>
                <div className="flex items-center gap-x-3">
                  <button
                    tabIndex={2}
                    type="button"
                    className="flex items-center gap-x-1.5 rounded-full bg-primary-9 px-3.5 py-2 text-sm font-semibold text-gray-1  hover:bg-primary-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 256 256">
                      <path
                        d="M224,64V192a8,8,0,0,1-8,8H80L45.15,230.11A8,8,0,0,1,32,224V64a8,8,0,0,1,8-8H216A8,8,0,0,1,224,64Z"
                        opacity="0.2"></path>
                      <path d="M216,48H40A16,16,0,0,0,24,64V224a15.85,15.85,0,0,0,9.24,14.5A16.13,16.13,0,0,0,40,240a15.89,15.89,0,0,0,10.25-3.78l.09-.07L83,208H216a16,16,0,0,0,16-16V64A16,16,0,0,0,216,48ZM40,224h0ZM216,192H80a8,8,0,0,0-5.23,1.95L40,224V64H216ZM88,112a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,112Zm0,32a8,8,0,0,1,8-8h64a8,8,0,1,1,0,16H96A8,8,0,0,1,88,144Z"></path>
                    </svg>
                    New Chat
                  </button>
                  <Dialog.Close asChild onClick={closeModal}>
                    <button
                      type="button"
                      className="rounded-full border border-interactive bg-surface-1 p-1.5 text-muted  hover:bg-surface-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-8">
                      <svg
                        className="size-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 256 256">
                        <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
                      </svg>
                    </button>
                  </Dialog.Close>
                </div>
              </div>
            </div>
          </header>
          <div className="overflow-hidden">
            <main className="relative size-full">
              <div className="size-full overflow-y-auto rounded-br-3xl">
                <div className="p-6 pb-24">
                  <div>
                    <div className="mx-auto mb-8 mt-2 max-w-full md:max-w-md">
                      <div className="flex items-center rounded-full border border-interactive px-4">
                        <svg
                          className="size-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 256 256">
                          <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                        </svg>
                        <input
                          tabIndex={1}
                          type="text"
                          className="flex-1 bg-transparent py-4 pl-2 text-xs font-medium outline-none  placeholder:text-subtle"
                          placeholder="Search prompts"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-4">
                      <Tabs />
                      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {Array.from({ length: prompts }).map((_, i) => (
                          <Prompt key={i} />
                        ))}
                      </ul>
                    </div>
                    <div className="mt-8 flex justify-center">
                      <button
                        className="flex items-center justify-center rounded-full border border-interactive bg-gray-3 px-4 py-2.5 transition-all"
                        onClick={() => setPrompts((v) => v + 10)}>
                        <span className="inline-flex -rotate-90">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="none"
                            viewBox="0 0 16 16">
                            <path
                              stroke="currentColor"
                              strokeLinejoin="bevel"
                              d="M10 3 4.5 8l5.5 5"></path>
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-auto w-full px-6 py-4 transition-all">
                <div className="flex rounded-[10px] border bg-surface-1 p-[7px] pl-3 focus-within:ring-1 focus-within:ring-gray-8">
                  <textarea
                    className="mt-1 h-6 max-h-52 flex-1 resize-none self-center bg-transparent text-sm font-medium placeholder-zinc-500 outline-none"
                    rows={1}
                    placeholder="Write your message..."></textarea>
                  <button className="btn-primary-icon self-end" disabled>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                      viewBox="0 0 16 16">
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M13.645 2.994a.5.5 0 0 0-.64-.639L2.27 6.189a.5.5 0 0 0-.011.938l3.345 1.287a.5.5 0 0 0 .437-.038l2.244-1.347c.446-.268.954.24.686.686L7.624 9.959a.5.5 0 0 0-.038.437l1.287 3.345a.5.5 0 0 0 .938-.01l3.834-10.737Z"
                        clipRule="evenodd"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </main>
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  )
}

export default Modal
