import {
  APP_SIZE,
  APP_VERSION,
  APP_DEVELOPER,
  APP_DEVELOPER_URL,
  APP_LAST_UPDATE,
  APP_RATING_VALUE,
  SITE_NAME,
} from '@/lib/site';

const appInfoRows: { label: string; value: string; href?: string }[] = [
  { label: 'App Name', value: SITE_NAME },
  { label: 'Developer', value: APP_DEVELOPER, href: APP_DEVELOPER_URL },
  { label: 'App Size', value: APP_SIZE },
  { label: 'Version', value: APP_VERSION },
  { label: 'Required OS', value: 'Android 6.0+' },
  { label: 'Last Update', value: APP_LAST_UPDATE },
  { label: 'Downloads', value: '500K+' },
  { label: 'Rating', value: `${APP_RATING_VALUE} ★ (200,000+)` },
  { label: 'Language', value: 'English (Urdu menus in-app)' },
  { label: 'Price', value: 'Free (0 PKR)' },
];

export default function AppInfoTable() {
  return (
    <div className="app-info-table mt-12">
      <div className="app-info-table-header">
        <h2>{SITE_NAME} APK Details</h2>
      </div>
      <div className="app-info-table-body">
        {appInfoRows.map(({ label, value, href }) => (
          <div key={label} className="app-info-row">
            <span className="app-info-label">{label}</span>
            <span className="app-info-value">
              {href ? (
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {value}
                </a>
              ) : (
                value
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
