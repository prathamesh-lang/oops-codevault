import { useState } from 'react';
import { BookOpen, Code, Copy, Check } from 'lucide-react';
import type { Practical, CodeTabType } from '../data/types';

interface CodeViewerProps {
  practical: Practical;
}

export default function CodeViewer({ practical }: CodeViewerProps) {
  const [activeTab, setActiveTab] = useState<CodeTabType>('algorithm');
  const [algoCopied, setAlgoCopied] = useState(false);

  const algorithm = practical.algorithm;

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

  const lines = practical.sourceCode.split('\n');

  return (
    <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-900 shadow-sm">
      {/* Tab bar */}
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-2">
        <div className="flex">
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
        </div>

        {/* Tab actions */}
        <div className="flex items-center gap-2 py-1.5">
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
        </div>
      </div>

      {/* Algorithm Content */}
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

      {/* Code Content */}
      {activeTab === 'code' && (
        <div className="flex overflow-auto max-h-[620px] bg-white dark:bg-slate-950">
          <div className="line-numbers-wrapper select-none pt-5 pb-5 pl-4 pr-3 shrink-0 font-mono text-xs leading-relaxed text-slate-300 dark:text-slate-600 border-r border-slate-100 dark:border-slate-800">
            {lines.map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
          <div className="flex-1 overflow-x-auto">
            <pre className="m-0 p-5 bg-transparent code-block font-mono text-xs text-slate-800 dark:text-slate-200">
              <code>{practical.sourceCode}</code>
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
