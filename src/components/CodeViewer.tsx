import { useEffect, useRef, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import { BookOpen, Code, Copy, Check, Download } from 'lucide-react';
import type { Practical, CodeTabType } from '../data/types';

interface CodeViewerProps {
  practical: Practical;
  initialTab?: CodeTabType;
}

export default function CodeViewer({ practical, initialTab = 'code' }: CodeViewerProps) {
  const [activeTab, setActiveTab] = useState<CodeTabType>(initialTab);
  const [codeCopied, setCodeCopied] = useState(false);
  const [algoCopied, setAlgoCopied] = useState(false);
  const codeRef = useRef<HTMLElement>(null);

  const algorithm = practical.algorithm;

  useEffect(() => {
    if (activeTab === 'code' && codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [activeTab, practical.sourceCode]);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(practical.sourceCode);
      setCodeCopied(true);
      setTimeout(() => setCodeCopied(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = practical.sourceCode;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCodeCopied(true);
      setTimeout(() => setCodeCopied(false), 2000);
    }
  };

  const copyAlgorithm = async () => {
    if (!algorithm) return;
    const text = algorithm.steps.join('\n');
    try {
      await navigator.clipboard.writeText(text);
      setAlgoCopied(true);
      setTimeout(() => setAlgoCopied(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setAlgoCopied(true);
      setTimeout(() => setAlgoCopied(false), 2000);
    }
  };

  const downloadCpp = () => {
    // Uses direct blob to guarantee 100% fidelity with on-screen code
    const blob = new Blob([practical.sourceCode], { type: 'text/plain; charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = practical.filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const lines = practical.sourceCode.split('\n');

  return (
    <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-900 shadow-sm">
      {/* ── Tab Bar ── */}
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-2 flex-wrap gap-y-2">
        <div className="flex">
          <button
            type="button"
            onClick={() => setActiveTab('code')}
            className={`flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-medium border-b-2 transition-colors ${
              activeTab === 'code'
                ? 'border-primary-600 text-primary-600 dark:text-primary-400 font-semibold'
                : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
            }`}
          >
            <Code size={14} />
            <span>C++ Source Code</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('algorithm')}
            className={`flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-medium border-b-2 transition-colors ${
              activeTab === 'algorithm'
                ? 'border-primary-600 text-primary-600 dark:text-primary-400 font-semibold'
                : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
            }`}
          >
            <BookOpen size={14} />
            <span>Step-by-Step Algorithm</span>
          </button>
        </div>

        {/* ── Action Buttons ── */}
        <div className="flex items-center gap-2 py-1.5 px-2">
          {activeTab === 'algorithm' && (
            <button
              type="button"
              onClick={copyAlgorithm}
              className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-2xs"
            >
              {algoCopied ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
              <span>{algoCopied ? 'Copied!' : 'Copy Algorithm'}</span>
            </button>
          )}
          {activeTab === 'code' && (
            <>
              <button
                type="button"
                onClick={copyCode}
                className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-2xs"
              >
                {codeCopied ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
                <span>{codeCopied ? 'Copied!' : 'Copy Code'}</span>
              </button>
              <button
                type="button"
                onClick={downloadCpp}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-md transition-colors shadow-2xs"
                title={`Download ${practical.filename}`}
              >
                <Download size={13} />
                <span>Download .cpp</span>
              </button>
            </>
          )}
        </div>
      </div>

      {/* ── C++ Code View with Prism Highlight & Line Numbers ── */}
      {activeTab === 'code' && (
        <div className="flex overflow-auto max-h-[620px] bg-white dark:bg-slate-950">
          <div className="line-numbers-wrapper select-none pt-5 pb-5 pl-4 pr-3 shrink-0 font-mono text-xs leading-relaxed text-slate-300 dark:text-slate-600 border-r border-slate-100 dark:border-slate-800">
            {lines.map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
          <div className="flex-1 overflow-x-auto">
            <pre className="m-0 p-5 bg-transparent code-block font-mono text-xs">
              <code ref={codeRef} className="language-cpp">
                {practical.sourceCode}
              </code>
            </pre>
          </div>
        </div>
      )}

      {/* ── Algorithm View ── */}
      {activeTab === 'algorithm' && (
        <div className="p-6 max-h-[620px] overflow-y-auto">
          <div className="mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
              Practical Record Algorithm
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Exam-standard procedural steps following standard laboratory journal format.
            </p>
          </div>
          <ol className="space-y-3">
            {algorithm.steps.map((step, i) => {
              const isStartStop = step === 'START' || step === 'STOP';
              return (
                <li key={i} className="flex items-start gap-3">
                  {!isStartStop ? (
                    <span className="shrink-0 w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 text-xs flex items-center justify-center font-bold mt-0.5">
                      {i}
                    </span>
                  ) : (
                    <span className="shrink-0 w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs flex items-center justify-center font-bold mt-0.5">
                      {step === 'START' ? '▶' : '■'}
                    </span>
                  )}
                  <span className={`text-sm leading-relaxed ${
                    isStartStop ? 'font-bold text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-200'
                  }`}>
                    {step}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      )}
    </div>
  );
}
