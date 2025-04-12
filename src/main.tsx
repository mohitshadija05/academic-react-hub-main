import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// TypeScript fix: Extend ServiceWorkerRegistration to include sync
interface ServiceWorkerRegistration {
    readonly sync?: SyncManager;
  }
  
  interface SyncManager {
    register(tag: string): Promise<void>;
  }
  

createRoot(document.getElementById("root")!).render(<App />);

// ✅ Register Service Worker + Sync + Push Notification
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('[SW] Registered successfully with scope:', registration.scope);

        // ✅ Background Sync registration (type-safe)
        if ('sync' in registration) {
          (registration as ServiceWorkerRegistration).sync?.register('sync-data')
            .then(() => console.log('[Sync] sync-data tag registered'))
            .catch(err => console.error('[Sync] registration failed:', err));
        }

        // ✅ Push Notification Permission
        if ('Notification' in window) {
          Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
              console.log('[Push] Notifications permitted');
            } else {
              console.warn('[Push] Notifications NOT permitted');
            }
          });
        }

      })
      .catch(error => {
        console.error('[SW] Registration failed:', error);
      });
  });
}
