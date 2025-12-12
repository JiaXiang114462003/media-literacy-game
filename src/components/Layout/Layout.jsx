import React from 'react';
import './Layout.css';
import titleIcon from '../../assets/TitleIcon.svg';
import negativeIcon from '../../assets/explode.png';

// Layout: topbar + center area placeholder
export default function Layout({
	round = 1,
	trust = 0,
	fans = 0,
	barStyle = {},
	children,
}) {
	return (
		<div className="layout-root">
			<div className="layout-topbar">
				<div className="left-title">
					<div className="media-icon">
						<img src={titleIcon} alt="Media Title Icon" />
					</div>

					<div className="media-title">Click or Check?</div>
				</div>

				<div className="round-label">ROUND {round}</div>

				<div className="bar-wrap">
					<div className="bar-labels">
						<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
							{trust < 0 ? (
								<img src={negativeIcon} alt="negative" className="trust-icon" />
							) : (
								<div
									style={{
										width: 10,
										height: 10,
										borderRadius: 3,
										background: '#52A6FF',
									}}
								/>
							)}
							<div style={{ color: '#799DDF' }}>公眾信任度 {trust}</div>
						</div>
						<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
							<div style={{ color: '#799DDF' }}>{fans} 平台粉絲數</div>
							<div
								style={{
									width: 10,
									height: 10,
									borderRadius: 3,
									background: '#FF467B',
								}}
							/>
						</div>
					</div>

					<div className="bar" style={barStyle} />
				</div>
			</div>

			<div className="layout-content">{children}</div>
		</div>
	);
}
