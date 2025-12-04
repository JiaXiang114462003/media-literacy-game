import React from 'react';

/**
 * 動作模態窗口元件
 * 用於分享時的選擇標題視窗
 */
export default function ActionModal({ isOpen, onClose, onAction }) {
	return (
		isOpen && (
			<div className="action-modal">{/* 動作模態視窗內容將在此實現 */}</div>
		)
	);
}
